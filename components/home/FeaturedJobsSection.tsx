import { Container } from 'components/common/ui/Container'
import { DetailsJobs } from './DetailsJobs'
import SectionTitle from 'components/common/ui/SectionTitle'

export const FeaturedJobs = () => {
  return (
    <div>
      <Container>
        <SectionTitle title="Featured Jobs" />
        <DetailsJobs />
      </Container>
    </div>
  )
}
