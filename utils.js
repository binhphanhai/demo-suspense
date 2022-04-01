import React from "react";
export function createResource(promise) {
  let status = "pending";
  let result = promise.then(
    (resolved) => {
      status = "success";
      result = resolved;
    },
    (rejected) => {
      status = "error";
      result = rejected;
    }
  );
  return {
    read() {
      if (status === "pending") throw result;
      if (status === "error") throw result;
      if (status === "success") return result;
      throw new Error("This should be impossible");
    },
  };
}

export const getTodoResource = (id) => {
  let resource = createResource(
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
      res.json()
    )
  );
  return resource;
};

export const useUpdateEffect = (effect, dependencies = []) => {
  const isInitialMount = React.useRef(true);

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
