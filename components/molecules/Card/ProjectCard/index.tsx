import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import LazyCard, { LazyCardProps } from 'components/atoms/LazyCard'
import Text from 'components/atoms/Text'
interface ProjectCardProps extends LazyCardProps {
  title: string
  description: string
  projectpic:string
}
const ProjectCard = ({
  title,
  description,
  projectpic,
  bottomSquareSize = 'small',
  height = 450,
}: ProjectCardProps) => {
  return (
    <div className="w-full ">
      <LazyCard title={title} bottomSquareSize={bottomSquareSize} height={height} imageSrc={projectpic}
      />
      <div className="flex flex-col place-items-center text-center mt-10">
        {/* <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div> */}
        <div className="mb-9">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
        <div className="">
          <ButtonLink
            value="Detail"
            color="white"
            radius="pill"
            style="outline"
            href="/project/detail"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
