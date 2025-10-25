import { Title } from 'components/common/ui/Title'
import { Container } from 'components/common/ui/Container'
import { DetailsJobs } from './DetailsJobs'

export const FeaturedJobs = () => {
  return (
    <div>
      <Container>
        <Title title="Featured Jobs" />
        <DetailsJobs />
      </Container>
    </div>
  )
}
