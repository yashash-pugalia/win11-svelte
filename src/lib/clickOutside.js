export default function clickOutside(
  element,
  options = { callback: () => {}, exclude: [] }
) {
  function onClick(event) {
    if (
      !element.contains(event.target) &&
      !options.exclude.map((e) => e.contains(event.target)).includes(true) &&
      typeof options.callback === "function"
    ) {
      options.callback();
    }
  }

  document.body.addEventListener("click", onClick);

  return {
    update(newCallbackFunction) {
      options.callback = newCallbackFunction;
    },
    destroy() {
      document.body.removeEventListener("click", onClick);
    },
  };
}
