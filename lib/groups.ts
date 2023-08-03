export type Group = {
  displayName: string;
  description: string;
  members: string[];
};

export const groups: Group[] = [
  {
    displayName: "Sample Group",
    description: "Sample Group Description",
    members: ["test@example.com"],
  },
];
