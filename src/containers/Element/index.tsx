import React, { FC } from 'react'
import { Segment, Card, Image, Icon} from "semantic-ui-react";
import { IMovie } from "types/movie";

interface IElement {
    movie: IMovie
}

const Element: FC<IElement> = ({ movie }) => {
    return (
        <Segment>
            <Card>
                <Image src={'http://image.tmdb.org/t/p/w342' + movie.poster_path}  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{movie.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{movie.release_date}</span>
                    </Card.Meta>
                    <Card.Description>
                        {movie.overview}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {movie.vote_average}
                    </a>
                </Card.Content>
            </Card>
        </Segment>
    )
}

export default Element
