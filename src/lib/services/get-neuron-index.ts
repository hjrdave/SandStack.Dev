interface Index {
  section: string;
  filename?: string;
  items?: {
    title: string;
    filename: string;
  }[];
}
export const getNeuronIndex = async (): Promise<Index[]> => {
  const branch = "create-docs";
  const res = await fetch(
    `https://raw.githubusercontent.com/hjrdave/Neuron/${branch}/src/docs/index.json`,
    { next: { revalidate: 0 } }
  );

  const index = (await res.json()) as Index[];
  return index;
};
