interface Career {
  id: number;
  name: string;
  address: string;
  postingDate: string;
  content: string;
}

interface CareersState {
  careers: Career[];
}
