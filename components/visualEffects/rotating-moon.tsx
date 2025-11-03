import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RotatingMoon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const moonRef = useRef<THREE.Mesh | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 6);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting setup - Minimal lighting for subtle moon
    const ambientLight = new THREE.AmbientLight(0x404040, 0.1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(-100, 10, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Hemisphere light for realistic moon lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.05);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 0, 0);
    scene.add(hemiLight);

    // Rim light for subtle glow
    const rimLight = new THREE.DirectionalLight(0x4a90e2, 0.2);
    rimLight.position.set(5, -2, -5);
    scene.add(rimLight);

    // Create moon with realistic textures
    const geometry = new THREE.SphereGeometry(5.5, 64, 64);
    const textureLoader = new THREE.TextureLoader();

    // Load lunar surface textures
    const texture = textureLoader.load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg"
    );
    const displacementMap = textureLoader.load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg"
    );

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: texture,
      displacementMap: displacementMap,
      displacementScale: 0.08,
      bumpMap: displacementMap,
      bumpScale: 0.05,
      reflectivity: 0,
      shininess: 0,
    });

    const moon = new THREE.Mesh(geometry, material);
    moon.position.set(0, 0, -10); // Centered position, moved back slightly
    moon.rotation.x = Math.PI * 0.02;
    moon.rotation.y = Math.PI * 1.54;
    moon.castShadow = true;
    moon.receiveShadow = true;
    scene.add(moon);
    moonRef.current = moon;

    // Create starfield - minimal and subtle
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 200; // Reduced for subtle effect
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.3,
      transparent: true,
      opacity: 0.2, // Very subtle
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    starsRef.current = stars;

    // Remove the background sphere - we don't want it

    // Animation loop - Smooth and professional
    const animate = () => {
      requestAnimationFrame(animate);

      if (moonRef.current) {
        moonRef.current.rotation.y += 0.002;
        moonRef.current.rotation.x += 0.0003;
      }

      if (starsRef.current) {
        starsRef.current.rotation.y += 0.0001;
        starsRef.current.rotation.x += 0.00005;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current)
        return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ margin: 0, padding: 0 }}
    />
  );
}
