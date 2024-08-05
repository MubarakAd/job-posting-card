// typ

export interface JobPosting {
    title: string;
    description: string;
    responsibilities: string[];
    ideal_candidate: IdealCandidate;
    when_where: string;
    about: About;
    company: string;
    image: string;
  }
  
  interface IdealCandidate {
    age: string;
    gender: string;
    traits: string[];
  }
  
  interface About {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  }
  