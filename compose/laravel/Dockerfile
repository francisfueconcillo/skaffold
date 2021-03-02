FROM php:7.4-fpm-alpine

# Copy File Config
ADD ./compose/laravel/www.conf /usr/local/etc/php-fpm.d/www.conf

# ADD and set Group
RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

# Create folder to run
RUN mkdir -p /var/www/html

# Set Profile
RUN chown laravel:laravel /var/www/html

# Work in the specific space
WORKDIR /var/www/html
COPY ./src/laravel/ .

# Install dependencies
RUN apk add --no-cache \
    freetype \
    libpng \
    libjpeg-turbo \
    freetype-dev \
    libpng-dev \
    libjpeg-turbo-dev

RUN docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg

RUN NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
    docker-php-ext-install -j${NPROC} gd

RUN apk del --no-cache freetype-dev libpng-dev libjpeg-turbo-dev

RUN docker-php-ext-install pdo pdo_mysql

# FIXME - XDEBUG not working with error "No releases available for package "pecl.php.net/xdebug"
# install and enable xdebug
# RUN apk add --no-cache $PHPIZE_DEPS \
# 	&& pecl install xdebug-2.9.7 \
# 	&& docker-php-ext-enable xdebug



EXPOSE 8888
