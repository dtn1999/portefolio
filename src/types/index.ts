export type ResumeData = {
    main: Main,
    resume: TResume,
    portfolio: any
}
  



export type Main = {
    name :string ;
    profilepic:string ;
    bio :string ;
    contactmessage:string;
    address:{
      street :string ;
      city :string 
      state :string 
      zip :string ;
    }
    phone:string ;
    email :string ;
    social: any[]
    resumedownload :string ;
    description: string,
    project: string,
    github: string,
    projects: any[],
  }


export type TResume = {
    education: any[],
    skills: any[],
    work: any[],
    skillmessage: string
  }