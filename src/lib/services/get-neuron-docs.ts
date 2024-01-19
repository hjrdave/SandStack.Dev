import { getMDXRemote } from "./get-mdx-remote";
export const getNeuronDocs = async (page: string) => {
  const branch = "master";
  const serializedDocs = await getMDXRemote(
    `https://raw.githubusercontent.com/hjrdave/Neuron/${branch}/docs/${page}.md`
  );
  return serializedDocs;
};
