export default function decorate(block) {
  const rows = Array.from(block.children);
  const config = rows[0]
  const items = rows.slice(1);
  const classes = items[0].firstElementChild.textContent.trim().split(",");
  console.log(classes);
  // classes.forEach(cls => {


  // });
}