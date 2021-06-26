import React, {Component} from 'react'

export default class tabs extends Component{


    render(){
        return(
            <div>
                <div class="container">
                    <div class="col s12">
                        <ul class="tabs">
                            <li class="tabs col s3"><a href="">HTML</a></li>
                            <li class="tabs col s3"><a href="">CSS</a></li>
                            <li class="tabs col s3"><a href="">PHP</a></li>
                            <li class="tabs col s3"><a href="">MYSQL</a></li>
                        </ul>
                    </div>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>PHP</div>
                    <div>MYSQL</div>
                </div>
            </div>
        )
    }
}
