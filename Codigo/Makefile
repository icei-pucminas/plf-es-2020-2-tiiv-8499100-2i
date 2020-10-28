build_frontend:
	cd web/front-end/ && npm run build
	cd ../../

move_frontend_to_deploy:
	mkdir deploy/templates
	cp -r web/front-end/build/* deploy/
	cp -r deploy/index.html deploy/templates/

move_backend_to_deploy:
	cp -r web/back-end/* deploy/

clear_deploy:
	rm -rf deploy/*

generate_deploy_folder:
	make clear_deploy
	make build_frontend
	make move_frontend_to_deploy
	make move_backend_to_deploy