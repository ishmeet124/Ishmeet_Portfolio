import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw, Zap, Radio, AlertCircle } from "lucide-react";

export const SkyliveShowcase: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeChannel, setActiveChannel] = useState<"aurora" | "ocean" | "wireframe">("aurora");
  const [ambilightOn, setAmbilightOn] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  // References to three.js objects for real-time updates
  const screenMeshRef = useRef<THREE.Mesh | null>(null);
  const backLightRef = useRef<THREE.PointLight | null>(null);
  const tvGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Group for TV
    const tvGroup = new THREE.Group();
    tvGroupRef.current = tvGroup;
    scene.add(tvGroup);

    // TV Chassis (Bezel)
    const bezelWidth = 4.2;
    const bezelHeight = 2.45;
    const bezelDepth = 0.08;

    const bezelMaterial = new THREE.MeshStandardMaterial({
      color: 0x111622,
      metalness: 0.85,
      roughness: 0.25,
    });

    const bezelGeometry = new THREE.BoxGeometry(bezelWidth, bezelHeight, bezelDepth);
    const bezelMesh = new THREE.Mesh(bezelGeometry, bezelMaterial);
    tvGroup.add(bezelMesh);

    // TV Screen
    const screenWidth = bezelWidth * 0.985;
    const screenHeight = bezelHeight * 0.975;
    const screenGeometry = new THREE.PlaneGeometry(screenWidth, screenHeight);

    // Create Canvas Texture for dynamic screen content
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 1024;
    screenCanvas.height = 576;
    const ctx = screenCanvas.getContext("2d")!;

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.generateMipmaps = true;

    const screenMaterial = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });

    const screenMesh = new THREE.Mesh(screenGeometry, screenMaterial);
    screenMesh.position.z = bezelDepth / 2 + 0.005;
    screenMeshRef.current = screenMesh;
    tvGroup.add(screenMesh);

    // TV Stand (Legs)
    const legMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.3,
    });

    const createLeg = (xPos: number) => {
      const legGroup = new THREE.Group();
      const legGeom = new THREE.CylinderGeometry(0.02, 0.03, 0.5, 16);
      const legMesh = new THREE.Mesh(legGeom, legMaterial);
      legMesh.rotation.z = xPos > 0 ? 0.35 : -0.35;
      legMesh.position.set(xPos, -bezelHeight / 2 - 0.15, 0);
      legGroup.add(legMesh);

      const footGeom = new THREE.BoxGeometry(0.08, 0.02, 0.45);
      const footMesh = new THREE.Mesh(footGeom, legMaterial);
      footMesh.position.set(xPos > 0 ? xPos + 0.1 : xPos - 0.1, -bezelHeight / 2 - 0.32, 0);
      legGroup.add(footMesh);

      return legGroup;
    };

    tvGroup.add(createLeg(-1.6));
    tvGroup.add(createLeg(1.6));

    // Ambilight / Dynamic Back Glow
    const backLight = new THREE.PointLight(0x06b6d4, 4.5, 12);
    backLight.position.set(0, 0, -0.6);
    backLightRef.current = backLight;
    tvGroup.add(backLight);

    // Key and Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(3, 4, 5);
    scene.add(dirLight);

    // Subtle Particle Dust Field
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 180;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x6366f1,
      transparent: true,
      opacity: 0.4,
    });
    const particleMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleMesh);

    // Mouse / Touch Interaction for 3D Orbiting
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !tvGroupRef.current) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      tvGroupRef.current.rotation.y += deltaX * 0.006;
      tvGroupRef.current.rotation.x = Math.max(-0.25, Math.min(0.25, tvGroupRef.current.rotation.x + deltaY * 0.003));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 2000);
    };

    const domElem = renderer.domElement;
    domElem.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Dynamic Animation Loop with Screen Rendering
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const renderScreenContent = (time: number, channel: string) => {
      ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);

      if (channel === "aurora") {
        // Northern Lights Aurora gradient animation
        const grad = ctx.createLinearGradient(0, 0, screenCanvas.width, screenCanvas.height);
        grad.addColorStop(0, "#030b1e");
        grad.addColorStop(0.3, "#064e3b");
        grad.addColorStop(0.65, "#06b6d4");
        grad.addColorStop(1, "#3b0764");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, screenCanvas.width, screenCanvas.height);

        // Aurora Waves
        ctx.save();
        ctx.globalAlpha = 0.55;
        for (let wave = 0; wave < 3; wave++) {
          ctx.beginPath();
          ctx.moveTo(0, screenCanvas.height);
          for (let x = 0; x <= screenCanvas.width; x += 40) {
            const y =
              screenCanvas.height * 0.45 +
              Math.sin(x * 0.005 + time * 1.5 + wave) * 70 +
              Math.cos(x * 0.003 - time * 0.8) * 40;
            ctx.lineTo(x, y);
          }
          ctx.lineTo(screenCanvas.width, screenCanvas.height);
          ctx.fillStyle = wave === 0 ? "#10b981" : wave === 1 ? "#38bdf8" : "#a855f7";
          ctx.fill();
        }
        ctx.restore();

        // Overlay UI
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.font = "bold 26px sans-serif";
        ctx.fillText("SKYLIVE ULTRA VISION", 60, 80);

        ctx.font = "16px sans-serif";
        ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
        ctx.fillText("4K HDR10+ • DOLBY VISION • 120Hz PRO", 60, 110);
      } else if (channel === "ocean") {
        // Deep Cinematic Ocean
        const grad = ctx.createRadialGradient(
          screenCanvas.width / 2,
          screenCanvas.height / 2,
          50,
          screenCanvas.width / 2,
          screenCanvas.height / 2,
          screenCanvas.width * 0.7
        );
        grad.addColorStop(0, "#0284c7");
        grad.addColorStop(0.5, "#0369a1");
        grad.addColorStop(1, "#020617");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, screenCanvas.width, screenCanvas.height);

        // Light rays
        ctx.save();
        ctx.globalAlpha = 0.35;
        for (let r = 0; r < 5; r++) {
          ctx.beginPath();
          const startX = (screenCanvas.width / 5) * r + Math.sin(time + r) * 30;
          ctx.moveTo(startX, 0);
          ctx.lineTo(startX + 120, screenCanvas.height);
          ctx.lineTo(startX + 60, screenCanvas.height);
          ctx.fillStyle = "#38bdf8";
          ctx.fill();
        }
        ctx.restore();

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 28px sans-serif";
        ctx.fillText("DEEP DIVE CINEMATICS", 60, 80);
        ctx.font = "16px sans-serif";
        ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
        ctx.fillText("PURE BLACK OLED CONTRAST", 60, 110);
      } else {
        // Technical / Wireframe
        ctx.fillStyle = "#030712";
        ctx.fillRect(0, 0, screenCanvas.width, screenCanvas.height);

        ctx.strokeStyle = "rgba(99, 102, 241, 0.4)";
        ctx.lineWidth = 1;
        for (let x = 0; x < screenCanvas.width; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, screenCanvas.height);
          ctx.stroke();
        }
        for (let y = 0; y < screenCanvas.height; y += 40) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(screenCanvas.width, y);
          ctx.stroke();
        }

        ctx.fillStyle = "#818cf8";
        ctx.font = "bold 24px monospace";
        ctx.fillText("SYSTEM ARCHITECTURE // THREE.JS 3D", 60, 80);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.font = "16px monospace";
        ctx.fillText("> SHOPIFY LIQUID INTEGRATION: ACTIVE", 60, 120);
        ctx.fillText("> GSAP SCROLLTRIGGER BINDING: SYNCHRONIZED", 60, 150);
        ctx.fillText("> REALTIME 60FPS SHADER PIPELINE", 60, 180);
      }

      screenTexture.needsUpdate = true;
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle auto-rotation if user is not actively dragging
      if (tvGroupRef.current && !isInteracting) {
        tvGroupRef.current.rotation.y = Math.sin(elapsedTime * 0.6) * 0.28;
      }

      // Update Screen
      renderScreenContent(elapsedTime, activeChannel);

      // Particle float
      particleMesh.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElem.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [activeChannel, isInteracting]);

  // Update ambilight when toggle changes
  useEffect(() => {
    if (backLightRef.current) {
      backLightRef.current.intensity = ambilightOn ? (activeChannel === "aurora" ? 4.5 : activeChannel === "ocean" ? 5 : 2) : 0;
      backLightRef.current.color.setHex(
        activeChannel === "aurora" ? 0x06b6d4 : activeChannel === "ocean" ? 0x0284c7 : 0x6366f1
      );
    }
  }, [ambilightOn, activeChannel]);

  const setAngle = (angleRad: number) => {
    if (tvGroupRef.current) {
      setIsInteracting(true);
      tvGroupRef.current.rotation.y = angleRad;
      setTimeout(() => setIsInteracting(false), 2500);
    }
  };

  return (
    <section className="skylive-showcase-section" id="skylive-showcase">
      <div className="container">
        
        {/* Header Block */}
        <div className="skylive-header-block">
          <div className="section-badge amber-badge">
            <Radio size={14} />
            <span>Currently Building</span>
          </div>

          <h2 className="section-title">
            SKYLIVE <span className="accent-gradient">Interactive 3D Showcase</span>
          </h2>

          <p className="section-subtitle">
            A premium TV brand experience combining Shopify e-commerce, product storytelling and an interactive 3D TV showcase.
          </p>

          <div className="skylive-status-alert">
            <AlertCircle size={18} className="text-amber" />
            <div>
              <strong>Currently in Development:</strong> This is an ongoing project engineered with <strong>Shopify Liquid</strong>, <strong>Three.js</strong>, and <strong>GSAP</strong>. Scroll-driven 3D product storytelling and interactive TV showcase currently being built.
            </div>
          </div>
        </div>

        {/* 3D Stage & Interactive Experience */}
        <div className="skylive-interactive-card">
          
          {/* Controls Header */}
          <div className="stage-top-controls">
            <div className="control-group">
              <span className="control-label">Visual Channel:</span>
              <button
                className={`stage-btn ${activeChannel === "aurora" ? "active" : ""}`}
                onClick={() => setActiveChannel("aurora")}
              >
                Aurora 4K
              </button>
              <button
                className={`stage-btn ${activeChannel === "ocean" ? "active" : ""}`}
                onClick={() => setActiveChannel("ocean")}
              >
                Deep Ocean
              </button>
              <button
                className={`stage-btn ${activeChannel === "wireframe" ? "active" : ""}`}
                onClick={() => setActiveChannel("wireframe")}
              >
                Technical Grid
              </button>
            </div>

            <div className="control-group">
              <button
                className={`stage-toggle-btn ${ambilightOn ? "active" : ""}`}
                onClick={() => setAmbilightOn(!ambilightOn)}
                title="Toggle ambient back illumination"
              >
                <Zap size={15} />
                <span>Ambilight {ambilightOn ? "ON" : "OFF"}</span>
              </button>
            </div>
          </div>

          {/* 3D Viewport */}
          <div className="canvas-wrapper-relative">
            <div className="three-canvas-container" ref={mountRef}></div>

            {/* Hint overlay */}
            <div className="viewport-interaction-hint">
              <RotateCw size={14} className="spin-slow" />
              <span>Click & Drag to Orbit 360°</span>
            </div>

            {/* Angle preset buttons */}
            <div className="viewport-angle-presets">
              <button className="preset-btn" onClick={() => setAngle(0)}>
                Front
              </button>
              <button className="preset-btn" onClick={() => setAngle(0.5)}>
                45° Angle
              </button>
              <button className="preset-btn" onClick={() => setAngle(1.3)}>
                Slim Profile
              </button>
            </div>
          </div>

          {/* Bottom Specs & Highlights Grid */}
          <div className="stage-specs-grid">
            <div className="spec-item">
              <div className="spec-label">3D Engine</div>
              <div className="spec-val">Three.js / WebGL</div>
              <div className="spec-desc">60 FPS Hardware Accelerated</div>
            </div>

            <div className="spec-item">
              <div className="spec-label">Motion & Story</div>
              <div className="spec-val">GSAP ScrollTrigger</div>
              <div className="spec-desc">Choreographed product reveal</div>
            </div>

            <div className="spec-item">
              <div className="spec-label">E-Commerce Core</div>
              <div className="spec-val">Shopify Liquid</div>
              <div className="spec-desc">Modular custom storefront sections</div>
            </div>

            <div className="spec-item">
              <div className="spec-label">Status</div>
              <div className="spec-val text-amber">Currently Building</div>
              <div className="spec-desc">Production release in progress</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
