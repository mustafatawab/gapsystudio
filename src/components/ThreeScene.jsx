import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000); // Use 60° FOV

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Add lighting
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 5);
        scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        scene.add(ambientLight);

        const hemisphereLight = new THREE.HemisphereLight(0x606060, 0x404040, 1);
        scene.add(hemisphereLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 10, 5);
        scene.add(pointLight);

        // Ensure model scaling and position
        const loader = new GLTFLoader();
        loader.load(
            '/landscape.glb',
            (gltf) => {
                const model = gltf.scene;
                model.position.set(0, -1, 0); // Adjust position
                model.scale.set(5, 5, 5); // Scale model up
                scene.add(model);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded'); // Progress logging
            },
            (error) => {
                console.error('Error loading GLB model:', error);
            }
        );

        // Add a floor
        const floorGeometry = new THREE.PlaneGeometry(50, 50);
        const floorMaterial = new THREE.MeshStandardMaterial({
            color: 0xeeeeee,
            roughness: 0.8,
            metalness: 0.2,
        });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -1;
        scene.add(floor);

        // Set up the camera
        camera.position.set(0, 3, 15);
        camera.lookAt(0, 0, 0);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on component unmount
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (<div
        ref={mountRef}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1, // Ensure it's behind other elements
        }}
    />);
};

export default ThreeScene;
