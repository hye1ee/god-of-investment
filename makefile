rm:
	@docker stop front
	@docker rm  front
up:
	@npm install
	@sed -i 's/"strict": true,/"strict": false,/g' tsconfig.json 
	@sed -i 's/269853963d463581b384ad925055cfb2/a27e29c16f535c5ade574d978a27a814/g' index.html

	@npm run build

	@sed -i 's/"strict": false,/"strict": true,/g' tsconfig.json
	@sed -i 's/a27e29c16f535c5ade574d978a27a814/269853963d463581b384ad925055cfb2/g' index.html 
	@docker build -t abred_front .
	@docker run -d  --name front -p 8080:8080 abred_front