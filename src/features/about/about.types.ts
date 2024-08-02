interface About {
  id: number;
  title: string;
  banner: any;
  ourStores: OurStores;
  ourTeam: OurTeam;
  whoWeAre: WhoWeAre;
}

interface OurTeam {
  id: number;
  ourTeamItem: OurTeamItem[];
}

interface OurTeamItem {
  id: number;
  title: string;
  description: string;
  image: any;
}

interface OurStores {
  id: number;
  title: string;
  description: string;
  OurStoresItem: OurStoresItem[];
}

interface OurStoresItem {
  id: number;
  address: string;
  phone: string;
  image: any;
}

interface AboutState {
  aboutContent: About;
}

interface WhoWeAre {
  title: string;
  content: string;
  image: any;
}