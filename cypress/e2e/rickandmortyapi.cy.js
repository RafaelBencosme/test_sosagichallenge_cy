describe('Rick and Morty API', () => {
    it('should be able to fetch details of all existing characters', async () => {
      const response = await cy.request('GET', 'https://rickandmortyapi.com/api/character').then(response => response); 
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('info');
        expect(response.body).to.have.property('results');
        expect(response.body.results.length).to.be.greaterThan(0);
        expect(response.headers).to.have.property('content-type').and.include('application/json');
    });

    it('should be able to fetch details of an existing character', async () => {
      const response = await cy.request('GET', 'https://rickandmortyapi.com/api/character/1').then(response => response);
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('name', 'Rick Sanchez');
        expect(response.headers).to.have.property('content-type').and.include('application/json');
    });

    it('should be able to fetch details from multiple characters', async () =>{
      const response = await cy.request('GET', 'https://rickandmortyapi.com/api/character/3,42,76,100').then(response => response); 
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property('content-type').and.include('application/json');
        expect(response.body).to.be.an('array');
        expect(response.body.length).greaterThan(0);
        expect(response.body[1]).to.have.property('id');
        expect(response.body[0]).to.have.property('name');
    });

    it('should have a latency of less than ms1000', async () => {
      const response = await cy.request('GET', 'https://rickandmortyapi.com/api/character').then(response => response);
        cy.log('Response timeL:' + response.duration + 'ms');
        expect(response.duration).to.be.lessThan(1000);
      });
    });