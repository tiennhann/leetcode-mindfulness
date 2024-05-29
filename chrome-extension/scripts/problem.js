class Problem {
    difficulty;
    slug;
    title;
    topics; 
    latestSubmission;

    constructor(problem, submission=null) {
        this.difficulty =  problem.difficulty;
        this.title =  problem.title;
        this.status =  problem.status;
        this.slug =  problem.titleSlug;
        this.topics = problem.topicTags.map(topic => new Topic(topic));
        this.addSubmission(submission)    
    } // end 

    addSubmission(submission) {
        if (submission === null)
            return
        this.latestSubmission = new Submission(submission)
    }
} 

class Submission {
    timestamp;
    memory;
    runtime;    

    constructor(submission) {
        this.timestamp = submission.timestamp;
        this.memory= submission.memory;
        this.runtime= submission.runtime;
    }

}

class Topic {
    slug;
    name;

    constructor(topic) {
        this.slug = topic.slug;
        this.name = topic.name;
    }
} 