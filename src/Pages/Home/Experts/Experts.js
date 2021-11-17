import React from 'react';

// import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
// import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
// import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
// import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWp6BwwlkDZMdLuX4tWzfqHQ_NeDh_zTPKw&usqp=CAU",
        name: 'Andrew Smith',
        expertize: '-AMERICAN GUIDE-'
    },
    {
        img: "https://media.gettyimages.com/photos/tourists-with-a-guide-in-front-of-the-coliseum-rome-picture-id487179331?s=612x612",
        name: 'John Anderson',
        expertize: '-FRENCH GUIDE-'
    },
    {
        img: "https://5.imimg.com/data5/HN/NC/MY-10365133/tour-guides-services-500x500.jpg",
        name: 'Zakaria Smith',
        expertize: '-TURKISH GUIDE-'
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrtGm9MYhszUKELw4r_nxo1iQVEQdWxYPLVITU-zyc1i4YusdFzTx7We8fH1BFKqCO_I&usqp=CAU",
        name: 'Sakib Anderson',
        expertize: '-ASIAN GUIDE-'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">OUR TOURIST GUIDES</h2>
            <div style={{marginTop:'5px'}} className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;