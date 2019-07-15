##Info
Sandbar dev database dump is from 9/27/2016; Postgres restore format.

The docker operations are wrapped in an npm script, and it's unlikely that any of this needs to be invoked directly (see the root README).  However, [Docker Compose](https://docs.docker.com/compose/install/) along with Docker Engine are required to setup the mocks.

First time mock setup will take some time in preparing the images.  This is a one time thing and should be pretty speedy on subsequent runs.

##A little bit about the containers:
* PostgreSQL database
* An ephermeral container solely for bootstrapping db dev data
* A ReST wrapper around the db accessible via localhost:3000

##Caveats
Because the db opens its ports before actually being ready, a static wait is used to make sure it's primed :(