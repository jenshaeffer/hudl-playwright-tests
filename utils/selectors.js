function getByQaId(page, id) {
  return page.locator(`[data-qa-id="${id}"]`);
}

module.exports = { getByQaId };
