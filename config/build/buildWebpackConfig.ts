import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/config";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name][contenthash].js',
            path: paths.output,
            clean: true
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev? buildDevServer(options) : undefined
    }
}