export default function decorate(block) {
  const rows = Array.from(block.children);
  const items = rows.slice(1);
  const classes = items[0].firstElementChild.textContent.trim().split(',');
  classes.forEach((cls) => {
    const config = rows[0];
    config.append(cls);
  });
}
