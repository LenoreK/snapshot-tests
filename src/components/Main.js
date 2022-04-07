import { Card } from 'react-boostrap/Card';

export default function Main() {
    return (
        <div>
            <Card style={{width: "18rem"}}>
                <Card.Img src='public/IMG_0254.jpg' className='card-img-top' alt="lenore's image"/>
                <div className="card-body">
                    <Card.Text className="card-text">Some Random Text</Card.Text>
                </div>
            </Card>
        </div>
    )
}