module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "creates scallfolding for React component",
    prompts: [
      { type: "input", name: "name", message: "component name please" },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{name}}-component.js",
        templateFile: "templates/react-component/component.txt",
      },
      {
        type: "add",
        path: "components/{{name}}-component.test.js",
        templateFile: "templates/react-component/component-test.txt",
      },
      {
        type: "add",
        path: "components/{{name}}-component.stories.js",
        templateFile: "templates/react-component/component-stories.txt",
      },
    ],
  });

  plop.setGenerator("reducer", {
    description: "creates scallfolding for React component",
    prompts: [{ type: "input", name: "name", message: "reducer name please" }],
    actions: [
      {
        type: "add",
        path: "features/{{name}}/{{name}}-reducer.js",
        templateFile: "templates/react-component/component.txt",
      },
    ],
  });
};
