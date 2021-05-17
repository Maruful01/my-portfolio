import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './Particle-config';

const ParticleBackgground = () => {
    return (
        <div>
            <Particles params={particlesConfig}></Particles>
        </div>
    );
};

export default ParticleBackgground;