FROM elasticsearch:5.6
RUN sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
RUN apt-get update && apt-get install zip
RUN mkdir -p /usr/share/elasticsearch/plugins/pinyin
RUN cd /usr/share/elasticsearch/plugins/pinyin \
    && wget https://github.com/medcl/elasticsearch-analysis-pinyin/releases/download/v5.6.13/elasticsearch-analysis-pinyin-5.6.13.zip \
    && unzip -j elasticsearch-analysis-pinyin-5.6.13.zip && rm elasticsearch-analysis-pinyin-5.6.13.zip