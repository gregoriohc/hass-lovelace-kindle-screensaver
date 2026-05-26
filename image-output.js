function normalizeImageFormat(imageFormat) {
  return String(imageFormat || "png").toLowerCase();
}

function resolveOutputPath(pageConfig) {
  const imageFormat = normalizeImageFormat(pageConfig.imageFormat);
  const ext = `.${imageFormat}`;
  let raw = pageConfig.outputPath;

  if (raw.toLowerCase().endsWith(ext)) {
    raw = raw.slice(0, -ext.length);
  }

  return raw + ext;
}

function resolveScreenshotTempPath(outputPath) {
  return `${outputPath}.render.png`;
}

function resolveFinalTempPath(outputPath, imageFormat) {
  return `${outputPath}.final.${normalizeImageFormat(imageFormat)}`;
}

function getGraphicsMagickFormat(imageFormat) {
  return normalizeImageFormat(imageFormat).toUpperCase();
}

module.exports = {
  getGraphicsMagickFormat,
  normalizeImageFormat,
  resolveFinalTempPath,
  resolveOutputPath,
  resolveScreenshotTempPath
};
