export interface IJob {
  title: string
  description: string,
  type: string, 
  salary: number,
  company: string,
  location: string
  requirements?: string[]
}