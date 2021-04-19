import path from 'path';

/**
 * Resolve path.
 * 
 * @export
 * @param {string} pathArg
 * @returns 
 */
export function resolvePath(pathArg: string): string {
    pathArg = pathArg.replace(/%([^%]+)%/g, function (_, n) {
        return process.env[n] || '';
    });
    if (path.isAbsolute(pathArg)) {
        return pathArg;
    } else {
        if (!!require.main) {
            return path.resolve(path.join(path.dirname(require.main?.filename), pathArg));
        } else {
            return path.resolve(path.join(__dirname, pathArg));
        }
    }
}