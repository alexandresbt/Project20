sudo apt install mysql-server
sudo mysql
  >SET PASSWORD FOR root@'localhost' = PASSWORD('root');

##    se placer dans le répertoire database     ##
sudo mysql -u root -p < sql/create-user.sql