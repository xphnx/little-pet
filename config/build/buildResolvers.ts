import { ResolveOptions } from "webpack";

import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [options.paths.src, 'node_modules'],
        preferAbsolute: true,
        mainFiles: ['index'],
        alias: {}
    }
}