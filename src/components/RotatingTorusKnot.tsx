import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Mesh } from 'three';

const RotatingTorusKnot: React.FC = () => {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group>
            <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
                <torusKnotGeometry args={[0.8, 0.45, 100, 100]} />
                <meshPhysicalMaterial
                    color="#a2a8ef"
                    roughness={0.4}
                    metalness={0.2}
                    clearcoat={0.6}
                    clearcoatRoughness={0.5}
                />
            </mesh>
        </group>
    );
};

export default RotatingTorusKnot;