import * as React from "react"
import Layout from '../../components/layout'
import ExerciseTabs from '../../components/exerciseTabs'


import Exercise1 from '../../components/Day09/Exercise1';
import Exercise2 from '../../components/Day09/Exercise2';

const exercises = [<Exercise1 />, <Exercise2 />];


// markup 
const IndexPage = () => {
    return (
        <Layout>
            <ExerciseTabs exercises={exercises} />
        </Layout>
    )
}

export default IndexPage;
