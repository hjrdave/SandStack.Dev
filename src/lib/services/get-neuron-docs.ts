import { getMDXRemote } from "./get-mdx-remote";
export const getNeuronDocs = async (page: string) => {
  const branch = "create-docs";
  const serializedDocs = await getMDXRemote(
    `https://raw.githubusercontent.com/hjrdave/Neuron/${branch}/src/docs/${page}.md`
  );
  return serializedDocs;
};
