interface Index {
  section: string;
  filename?: string;
  items?: {
    parent: string;
    title: string;
    filename: string;
  }[];
}
export const getNeuronIndex = async (): Promise<Index[]> => {
  const branch = "master";
  const res = await fetch(
    `https://raw.githubusercontent.com/hjrdave/Neuron/${branch}/docs/index.json`,
    { next: { revalidate: 0 } }
  );

  const index = (await res.json()) as Index[];
  return index;
};
