import { registerPlugin } from '@capacitor/core';
import type { FaceIdPlugin, FaceIdPluginIsAvailableResult, FaceIdPluginAuthOptions } from './definitions';

const FaceId = registerPlugin<FaceIdPlugin>('FaceIdPlugin');

export * from './definitions';
export { FaceId, FaceIdPluginIsAvailableResult, FaceIdPluginAuthOptions };