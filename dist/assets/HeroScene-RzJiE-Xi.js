import{r as s,j as f}from"./index-DV9RapvE.js";import{R as oe,I as ve,F as X,a as k,b as O,W as ge,B as $,S as ae,V as w,c as ye,U as K,d as Q,e as ce,M as xe,f as D,g as le,h as ue,L as Se,u as be,C as we,P as _e,i as R,D as j,j as Y,k as Ee}from"./useMedia-CLN9aJ4t.js";import"./_commonjsHelpers-Cpj98o6Y.js";function L(){return L=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},L.apply(null,arguments)}const de=parseInt(oe.replace(/\D+/g,"")),fe=de>=125?"uv1":"uv2",Z=new $,T=new w;class q extends ve{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new X(e,3)),this.setAttribute("uv",new X(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new k(t,6,1);return this.setAttribute("instanceStart",new O(i,3,0)),this.setAttribute("instanceEnd",new O(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const n=new k(i,t*2,1);return this.setAttribute("instanceColorStart",new O(n,t,0)),this.setAttribute("instanceColorEnd",new O(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ge(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Z.setFromBufferAttribute(t),this.boundingBox.union(Z))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ae),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,c=e.count;r<c;r++)T.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(T)),T.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(T));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class pe extends q{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){const i=e.length-t,n=new Float32Array(2*i);if(t===3)for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];else for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5],n[2*r+6]=e[r+6],n[2*r+7]=e[r+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class J extends ye{constructor(e){super({type:"LineMaterial",uniforms:K.clone(K.merge([Q.common,Q.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ce(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${de>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const G=new D,ee=new w,te=new w,v=new D,g=new D,E=new D,F=new w,N=new ue,y=new Se,ne=new w,I=new $,W=new ae,A=new D;let M,B;function ie(o,e,t){return A.set(0,0,-e,1).applyMatrix4(o.projectionMatrix),A.multiplyScalar(1/A.w),A.x=B/t.width,A.y=B/t.height,A.applyMatrix4(o.projectionMatrixInverse),A.multiplyScalar(1/A.w),Math.abs(Math.max(A.x,A.y))}function Ae(o,e){const t=o.matrixWorld,i=o.geometry,n=i.attributes.instanceStart,r=i.attributes.instanceEnd,c=Math.min(i.instanceCount,n.count);for(let a=0,u=c;a<u;a++){y.start.fromBufferAttribute(n,a),y.end.fromBufferAttribute(r,a),y.applyMatrix4(t);const d=new w,m=new w;M.distanceSqToSegment(y.start,y.end,m,d),m.distanceTo(d)<B*.5&&e.push({point:m,pointOnLine:d,distance:M.origin.distanceTo(m),object:o,face:null,faceIndex:a,uv:null,[fe]:null})}}function Me(o,e,t){const i=e.projectionMatrix,r=o.material.resolution,c=o.matrixWorld,a=o.geometry,u=a.attributes.instanceStart,d=a.attributes.instanceEnd,m=Math.min(a.instanceCount,u.count),p=-e.near;M.at(1,E),E.w=1,E.applyMatrix4(e.matrixWorldInverse),E.applyMatrix4(i),E.multiplyScalar(1/E.w),E.x*=r.x/2,E.y*=r.y/2,E.z=0,F.copy(E),N.multiplyMatrices(e.matrixWorldInverse,c);for(let h=0,b=m;h<b;h++){if(v.fromBufferAttribute(u,h),g.fromBufferAttribute(d,h),v.w=1,g.w=1,v.applyMatrix4(N),g.applyMatrix4(N),v.z>p&&g.z>p)continue;if(v.z>p){const l=v.z-g.z,S=(v.z-p)/l;v.lerp(g,S)}else if(g.z>p){const l=g.z-v.z,S=(g.z-p)/l;g.lerp(v,S)}v.applyMatrix4(i),g.applyMatrix4(i),v.multiplyScalar(1/v.w),g.multiplyScalar(1/g.w),v.x*=r.x/2,v.y*=r.y/2,g.x*=r.x/2,g.y*=r.y/2,y.start.copy(v),y.start.z=0,y.end.copy(g),y.end.z=0;const _=y.closestPointToPointParameter(F,!0);y.at(_,ne);const C=le.lerp(v.z,g.z,_),U=C>=-1&&C<=1,H=F.distanceTo(ne)<B*.5;if(U&&H){y.start.fromBufferAttribute(u,h),y.end.fromBufferAttribute(d,h),y.start.applyMatrix4(c),y.end.applyMatrix4(c);const l=new w,S=new w;M.distanceSqToSegment(y.start,y.end,S,l),t.push({point:S,pointOnLine:l,distance:M.origin.distanceTo(S),object:o,face:null,faceIndex:h,uv:null,[fe]:null})}}}class me extends xe{constructor(e=new q,t=new J({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let c=0,a=0,u=t.count;c<u;c++,a+=2)ee.fromBufferAttribute(t,c),te.fromBufferAttribute(i,c),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+ee.distanceTo(te);const r=new k(n,2,1);return e.setAttribute("instanceDistanceStart",new O(r,1,0)),e.setAttribute("instanceDistanceEnd",new O(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;M=e.ray;const c=this.matrixWorld,a=this.geometry,u=this.material;B=u.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),W.copy(a.boundingSphere).applyMatrix4(c);let d;if(i)d=B*.5;else{const p=Math.max(n.near,W.distanceToPoint(M.origin));d=ie(n,p,u.resolution)}if(W.radius+=d,M.intersectsSphere(W)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),I.copy(a.boundingBox).applyMatrix4(c);let m;if(i)m=B*.5;else{const p=Math.max(n.near,I.distanceToPoint(M.origin));m=ie(n,p,u.resolution)}I.expandByScalar(m),M.intersectsBox(I)!==!1&&(i?Ae(this,t):Me(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(G),this.material.uniforms.resolution.value.set(G.z,G.w))}}class Le extends me{constructor(e=new pe,t=new J({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const Ue=s.forwardRef(function({points:e,color:t=16777215,vertexColors:i,linewidth:n,lineWidth:r,segments:c,dashed:a,...u},d){var m,p;const h=be(U=>U.size),b=s.useMemo(()=>c?new me:new Le,[c]),[x]=s.useState(()=>new J),_=(i==null||(m=i[0])==null?void 0:m.length)===4?4:3,C=s.useMemo(()=>{const U=c?new q:new pe,H=e.map(l=>{const S=Array.isArray(l);return l instanceof w||l instanceof D?[l.x,l.y,l.z]:l instanceof ce?[l.x,l.y,0]:S&&l.length===3?[l[0],l[1],l[2]]:S&&l.length===2?[l[0],l[1],0]:l});if(U.setPositions(H.flat()),i){t=16777215;const l=i.map(S=>S instanceof we?S.toArray():S);U.setColors(l.flat(),_)}return U},[e,c,i,_]);return s.useLayoutEffect(()=>{b.computeLineDistances()},[e,b]),s.useLayoutEffect(()=>{a?x.defines.USE_DASH="":delete x.defines.USE_DASH,x.needsUpdate=!0},[a,x]),s.useEffect(()=>()=>{C.dispose(),x.dispose()},[C]),s.createElement("primitive",L({object:b,ref:d},u),s.createElement("primitive",{object:C,attach:"geometry"}),s.createElement("primitive",L({object:x,attach:"material",color:t,vertexColors:!!i,resolution:[h.width,h.height],linewidth:(p=n??r)!==null&&p!==void 0?p:1,dashed:a,transparent:_===4},u)))}),ze=()=>parseInt(oe.replace(/\D+/g,"")),he=ze(),V=he>=154?"opaque_fragment":"output_fragment";class Be extends _e{constructor(e){super(e),this.onBeforeCompile=(t,i)=>{const{isWebGL2:n}=i.capabilities;t.fragmentShader=t.fragmentShader.replace(`#include <${V}>`,`
        ${n?`#include <${V}>`:`#extension GL_OES_standard_derivatives : enable
#include <${V}>`}
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      #include <tonemapping_fragment>
      #include <${he>=154?"colorspace_fragment":"encodings_fragment"}>
      `)}}}const Ce=s.forwardRef((o,e)=>{const[t]=s.useState(()=>new Be(null));return s.createElement("primitive",L({},o,{object:t,ref:e,attach:"material"}))}),Oe=s.forwardRef(({children:o,enabled:e=!0,speed:t=1,rotationIntensity:i=1,floatIntensity:n=1,floatingRange:r=[-.1,.1],autoInvalidate:c=!1,...a},u)=>{const d=s.useRef(null);s.useImperativeHandle(u,()=>d.current,[]);const m=s.useRef(Math.random()*1e4);return R(p=>{var h,b;if(!e||t===0)return;c&&p.invalidate();const x=m.current+p.clock.getElapsedTime();d.current.rotation.x=Math.cos(x/4*t)/8*i,d.current.rotation.y=Math.sin(x/4*t)/8*i,d.current.rotation.z=Math.sin(x/4*t)/20*i;let _=Math.sin(x/4*t)/10;_=le.mapLinear(_,-.1,.1,(h=r==null?void 0:r[0])!==null&&h!==void 0?h:-.1,(b=r==null?void 0:r[1])!==null&&b!==void 0?b:.1),d.current.position.y=_*n,d.current.updateMatrix()}),s.createElement("group",a,s.createElement("group",{ref:d,matrixAutoUpdate:!1},o))});let z,P;const je=s.createContext(null),re=new ue,se=new w,De=s.forwardRef(({children:o,range:e,limit:t=1e3,...i},n)=>{const r=s.useRef(null);s.useImperativeHandle(n,()=>r.current,[]);const[c,a]=s.useState([]),[[u,d,m]]=s.useState(()=>[new Float32Array(t*3),Float32Array.from({length:t*3},()=>1),Float32Array.from({length:t},()=>1)]);s.useEffect(()=>{r.current.geometry.attributes.position.needsUpdate=!0}),R(()=>{for(r.current.updateMatrix(),r.current.updateMatrixWorld(),re.copy(r.current.matrixWorld).invert(),r.current.geometry.drawRange.count=Math.min(t,e!==void 0?e:t,c.length),z=0;z<c.length;z++)P=c[z].current,P.getWorldPosition(se).applyMatrix4(re),se.toArray(u,z*3),r.current.geometry.attributes.position.needsUpdate=!0,P.matrixWorldNeedsUpdate=!0,P.color.toArray(d,z*3),r.current.geometry.attributes.color.needsUpdate=!0,m.set([P.size],z),r.current.geometry.attributes.size.needsUpdate=!0});const p=s.useMemo(()=>({getParent:()=>r,subscribe:h=>(a(b=>[...b,h]),()=>a(b=>b.filter(x=>x.current!==h.current)))}),[]);return s.createElement("points",L({userData:{instances:c},matrixAutoUpdate:!1,ref:r,raycast:()=>null},i),s.createElement("bufferGeometry",null,s.createElement("bufferAttribute",{attach:"attributes-position",count:u.length/3,array:u,itemSize:3,usage:j}),s.createElement("bufferAttribute",{attach:"attributes-color",count:d.length/3,array:d,itemSize:3,usage:j}),s.createElement("bufferAttribute",{attach:"attributes-size",count:m.length,array:m,itemSize:1,usage:j})),s.createElement(je.Provider,{value:p},o))}),Pe=s.forwardRef(({children:o,positions:e,colors:t,sizes:i,stride:n=3,...r},c)=>{const a=s.useRef(null);return s.useImperativeHandle(c,()=>a.current,[]),R(()=>{const u=a.current.geometry.attributes;u.position.needsUpdate=!0,t&&(u.color.needsUpdate=!0),i&&(u.size.needsUpdate=!0)}),s.createElement("points",L({ref:a},r),s.createElement("bufferGeometry",null,s.createElement("bufferAttribute",{attach:"attributes-position",count:e.length/n,array:e,itemSize:n,usage:j}),t&&s.createElement("bufferAttribute",{attach:"attributes-color",count:t.length/n,array:t,itemSize:3,usage:j}),i&&s.createElement("bufferAttribute",{attach:"attributes-size",count:i.length/n,array:i,itemSize:1,usage:j})),o)}),Re=s.forwardRef((o,e)=>o.positions instanceof Float32Array?s.createElement(Pe,L({},o,{ref:e})):s.createElement(De,L({},o,{ref:e})));function Te({count:o}){const e=s.useRef(null),t=s.useMemo(()=>{const i=new Float32Array(o*3);for(let n=0;n<o;n++)i[n*3]=(Math.random()-.5)*16,i[n*3+1]=(Math.random()-.5)*10,i[n*3+2]=(Math.random()-.5)*10;return i},[o]);return R(i=>{e.current&&(e.current.rotation.y=i.clock.elapsedTime*.018,e.current.rotation.x=Math.sin(i.clock.elapsedTime*.08)*.04)}),f.jsx(Re,{ref:e,positions:t,stride:3,frustumCulled:!1,children:f.jsx(Ce,{transparent:!0,color:"#6ee7c5",size:.035,sizeAttenuation:!0,depthWrite:!1,opacity:.72})})}function Ie(){const o=s.useRef(null),e=s.useMemo(()=>{const i=[];for(let n=0;n<18;n++){const r=n/18*Math.PI*2,c=1.15+n%3*.22;i.push(new w(Math.cos(r)*c,Math.sin(r*1.7)*.55,Math.sin(r)*c*.6))}return i},[]),t=s.useMemo(()=>{const i=[];return e.forEach((n,r)=>{i.push([n,e[(r+3)%e.length]]),i.push([n,e[(r+7)%e.length]])}),i},[e]);return R(i=>{o.current&&(o.current.rotation.y=i.clock.elapsedTime*.12,o.current.rotation.z=Math.sin(i.clock.elapsedTime*.2)*.08)}),f.jsxs("group",{ref:o,position:[2.35,.15,-.4],children:[t.map((i,n)=>f.jsx(Ue,{points:i,color:n%2===0?"#6ee7c5":"#d4a574",lineWidth:.6,transparent:!0,opacity:.28},n)),e.map((i,n)=>f.jsxs("mesh",{position:i,children:[f.jsx("sphereGeometry",{args:[.035,8,8]}),f.jsx("meshBasicMaterial",{color:n%3===0?"#d4a574":"#6ee7c5"})]},n))]})}function We(){return f.jsxs(Oe,{speed:1.2,rotationIntensity:.35,floatIntensity:.55,children:[f.jsxs("mesh",{position:[-2.4,.35,-1.2],children:[f.jsx("icosahedronGeometry",{args:[1.05,0]}),f.jsx("meshStandardMaterial",{color:"#6ee7c5",wireframe:!0,transparent:!0,opacity:.22})]}),f.jsxs("mesh",{position:[-2.4,.35,-1.2],children:[f.jsx("octahedronGeometry",{args:[.42,0]}),f.jsx("meshStandardMaterial",{color:"#d4a574",wireframe:!0,transparent:!0,opacity:.5})]})]})}function Ne(){const o=Y("(prefers-reduced-motion: reduce)"),e=Y("(max-width: 768px)");return o?null:f.jsx("div",{className:"absolute inset-0 z-0",children:f.jsxs(Ee,{camera:{position:[0,0,6.2],fov:50},dpr:[1,e?1.2:1.6],gl:{antialias:!0,alpha:!0},children:[f.jsx("color",{attach:"background",args:["#08090d"]}),f.jsx("ambientLight",{intensity:.45}),f.jsx("pointLight",{position:[4,3,4],intensity:18,color:"#6ee7c5",distance:18}),f.jsx("pointLight",{position:[-4,-2,2],intensity:10,color:"#d4a574",distance:16}),f.jsx(Te,{count:e?180:380}),!e&&f.jsx(Ie,{}),f.jsx(We,{})]})})}export{Ne as default};
