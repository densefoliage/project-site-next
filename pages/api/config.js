import yaml from 'js-yaml'

export async function getConfig() {
    const config = await import("../../_config/config.yml")
    return yaml.load(info.config)
}

export async function getSiteInfo() {
    const info = await import("../../_config/siteInfo.yml")
    return yaml.load(info.default)
}

export async function getContactInfo() {
    const info = await import("../../_config/contactInfo.yml")
    return yaml.load(info.default)
}

export async function getPlaces() {
    const places = await import("../../_config/places.yml")
    return yaml.load(places.default)
}

export async function getContentTypes() {
    const contentTypes = await import("../../_config/contentTypes.yml")
    return yaml.load(contentTypes.default)
}

export async function getNavLinks() {
    const navLinks = await import("../../_config/navLinks.yml")
    return yaml.load(navLinks.default);
}