import conf from "../conf/conf";

import { Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost(){}
    async updatePost(){}
    async deletePost(){}
    async getPost(){}
    async getPosts(){}

}

const service = new Service()
export default service
