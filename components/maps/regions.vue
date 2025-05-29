<map_republic @hoverMap="hoveredRegion" @clickMap="clickedRegion" v-if="activemap == 'map_republic'" />
            <map_samarqand @hoverMap="hoveredRegion" v-if="activemap == 'map_samarqand'" />
            <map_navoi @hoverMap="hoveredRegion" v-if="activemap == 'map_navoi'" />        
            <map_andijan @hoverMap="hoveredRegion" v-if="activemap == 'map_andijan'"/>
            <map_fergana @hoverMap="hoveredRegion" v-if="activemap == 'map_fergana'"/>
            <map_namangan @hoverMap="hoveredRegion" v-if="activemap == 'map_namangan'"/>
            <map_toshvil @hoverMap="hoveredRegion" @clickOhangaran="clickedRegion" v-if="activemap == 'map_toshvil'"/>
            <map_toshcity @hoverMap="hoveredRegion" v-if="activemap == 'map_toshcity'"/>
            <map_jizzakh @hoverMap="hoveredRegion" v-if="activemap == 'map_jizzakh'"/>
            <map_sirdarya @hoverMap="hoveredRegion" v-if="activemap == 'map_sirdarya'"/>
            <map_surxondarya @hoverMap="hoveredRegion" v-if="activemap == 'map_surxondarya'"/>
            <map_qashqadaryo @hoverMap="hoveredRegion" v-if="activemap == 'map_qashqadaryo'"/>
            <map_buxoro @hoverMap="hoveredRegion" v-if="activemap == 'map_buxoro'"/>
            <map_qqrepublic @hoverMap="hoveredRegion" v-if="activemap == 'map_qqrepublic'"/>
            <map_khorezm @hoverMap="hoveredRegion" v-if="activemap == 'map_khorezm'"/>
            <map_ohangaron v-if="activemap == 'map_ohangaron'"/> 