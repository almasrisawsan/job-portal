



export interface IJobFromAPI {
  
  id: string;                 
  title: string;              
  company: string;            
  location: string;           
  type: string;              
  salary: string;             
  description: string;        
  isFeatured: boolean;        
  categoryId: number;         

  
  tags?: string[];            
  requirements?: string[];    
  companyUrl?: string;        
  createdAt?: string;         

  companyName?: string;       
  companyWebsite?: string;   
  jobTitle?: string;         
  jobCategory?: string;      
  jobType?: string;          
  jobLocation?: string;      
  experience?: string;       
  salaryRange?: string;      
  featured?: string;         
  jobDescription?: string;   

  email?: string;
  fullName?: string;
  password?: string;

}

export type TJobForDisplay = Pick<
  IJobFromAPI,
  | 'id'
  |'title'
  |'company'
  |'location'
  |'type'
  |'salary'
  |'description'
  |'requirements'
  | 'createdAt'
>;
