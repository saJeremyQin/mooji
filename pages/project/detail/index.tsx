import LazyCard from 'components/atoms/LazyCard'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'

const ProjectDetail = () => {
  interface Project {
    title: string
    description: string,
    projectpic: string
  }
  const projectList: Project[] = [
    // {
    //   title: 'Simple Mobile Blog App',
    //   description: 'A blog app on mobile platform',
    // },
    // {
    //   title: 'Realtime Chat App UI Design',
    //   description: 'A UI design for realtime chat app',
    // },
    // {
    //   title:"StartZero",
    //   description:"An mini-program providing community lives and E-commerce function",
    //   projectpic:'/images/startZero_img.webp'
    // },
    {
      title:"WhatsMenu",
      description:"An ordering dishes mobile app run on Tablets",
      projectpic:'/images/whatsMenu_img.webp'
    },
    {
      title: 'GuanYiAn',
      description: 'A online learning mini-program run on wechat',
      projectpic:'/images/guanYiAn_img.webp'
    },
    // {
    //   title: 'HotEvent',
    //   description: 'A simple news pubishing system, some hotEvents around you',
    //   projectpic:'/images/hotEvents_img.webp'
    // },
  ]
  return (
    <PageTemplate title='Project Detail - Mooji'>
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJECT DETAIL"
            title="The Desktop App Landing Page"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <aside data-aos="fade-up-right">
          <LazyCard title="startZero" bottomSquareSize="big" height={400} imageSrc='/images/startZero_img.webp' />
        </aside>
        <aside className="grid gap-12 place-content-center" data-aos="fade-up-left">
          <Text
            textStyle="SectionParagraph"
            value="We build an app to connect the club member to our offline consume scenarios, for the fans of vegetable meat, the latest activities with famous Brand such as KFC, Subway"
          />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATEGORY" textStyle="ProjectDetailLabel" />
              <Text value="Development" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="CLIENT" textStyle="ProjectDetailLabel" />
              <Text value="StartZero, Inc" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="TECHNOLOGY" textStyle="ProjectDetailLabel" />
              <Text
                value="JavaScript, HTML, CSS, Uniapp"
                textStyle="ProjectDetailValue"
              />
            </div>
          </div>
        </aside>
      </section>
      <LineDivider />
      <section className="grid gap-16 place-items-center">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
          <PageSentence
            badge="PROJECT DETAIL"
            title="other Apps we developed"
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div
                className="basis-full lg:basis-1/2"
                key={randomString(64)}
                data-aos="zoom-in-up"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  projectpic={project.projectpic}
                />
              </div>
            )
          })}
        </div>
      </section>
    </PageTemplate>
  )
}

export default ProjectDetail
