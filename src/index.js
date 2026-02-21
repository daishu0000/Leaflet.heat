'use strict';

// 将 simpleheat 暴露为全局，供 HeatLayer 使用（保持与原有 IIFE 行为一致）
import simpleheat from './simpleheat.js';
if (typeof window !== 'undefined') {
    window.simpleheat = simpleheat;
}

import './HeatLayer.js';
