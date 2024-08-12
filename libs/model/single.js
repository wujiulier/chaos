// 单例模式
// 作用: 确保一个类只有一个实例，并提供一个全局访问点。

// 使用场景: 配置管理、日志记录器、数据库连接池等需要唯一实例的场景。

class ConfigManager {
    constructor(){
        if(ConfigManager.instance){
            return ConfigManager.instance;
        }

        ConfigManager.instance = this;
        this.config = {};
    }

    getConfig(key){
        return this.config[key];
    }

    setConfig(key,value){
        this.config[key] = value;
    }
}