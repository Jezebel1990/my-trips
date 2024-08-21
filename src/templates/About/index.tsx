/* eslint-disable react/no-unescaped-entities */
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from "@/components/LinkWrapper"

import * as S from './styles'

const AboutTemplate = () => (
    <S.Content>
      <LinkWrapper href="/">
      <CloseOutline  size={32}/>
      </LinkWrapper>

     <S.Heading>My Trips</S.Heading>

     <S.Body>
    <p>   It is a personal website showcasing my travels around the world through interactive maps. 
    Each location I've visited is highlighted, providing insights into the cultures, landscapes, and experiences I've encountered.
    The site allows users to explore my journey visually and read stories about the unique adventures in each destination. 
      It's a celebration of exploration and a resource for fellow travelers seeking inspiration.
      Join me as I share my passion for discovering new places.</p>
     </S.Body>
    </S.Content>
)

export default AboutTemplate