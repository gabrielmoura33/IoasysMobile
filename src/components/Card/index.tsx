import React from 'react';
import { 
  Container,
  Thumbnail,
  Content,
  Title,
  Description
} from './styles';
/**
 * @description Delete example import
 */
import thumbnailExampleSrc from '../../assets/thumb.png';

interface CardProps {
  photo: string
  enterprise_name: string;
  description: string;
}

function Card(data:CardProps) {
  return (
    <Container>
      <Thumbnail source={{uri: `https://empresas.ioasys.com.br/${data.photo}`}} />
      <Content>
        <Title>{data.enterprise_name}</Title>
        <Description>
          {data.description}
        </Description>
      </Content>
      
    </Container>
  );
};

export default Card;
